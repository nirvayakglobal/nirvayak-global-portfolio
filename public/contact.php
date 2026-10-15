<?php
/**
 * Nirvayak Global - Contact Form Mail Handler for Hostinger
 * Sends contact inquiry emails directly to info@nirvayakglobal.com
 */

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Ensure request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed. Only POST requests are accepted.'
    ]);
    exit;
}

// Destination email
$to = 'info@nirvayakglobal.com';

// Parse JSON payload or fallback to standard POST
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!is_array($data) || empty($data)) {
    $data = $_POST;
}

// Extract and sanitize input fields
$name        = isset($data['name']) ? trim(strip_tags($data['name'])) : '';
$phone       = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$email       = isset($data['email']) ? trim(strip_tags($data['email'])) : '';
$projectType = isset($data['projectType']) ? trim(strip_tags($data['projectType'])) : 'General Inquiry';
$message     = isset($data['message']) ? trim(strip_tags($data['message'])) : '';

// Validation
if (empty($name) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in your name and message.'
    ]);
    exit;
}

// Validate email format if provided
$replyToEmail = filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : 'info@nirvayakglobal.com';

// Subject line
$subject = "New Website Inquiry from {$name}: {$projectType}";

// Email HTML content
$htmlBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='utf-8'>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9fb; margin: 0; padding: 24px; color: #1e293b; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #004ac6; padding: 24px; color: #ffffff; text-align: left; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; }
    .header p { margin: 4px 0 0 0; font-size: 13px; opacity: 0.9; }
    .content { padding: 24px; }
    .item { margin-bottom: 16px; }
    .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 4px; }
    .val { font-size: 15px; color: #0f172a; font-weight: 500; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-top: 8px; white-space: pre-line; line-height: 1.6; font-size: 14px; }
    .footer { padding: 16px 24px; background: #f1f5f9; font-size: 12px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class='container'>
    <div class='header'>
      <h1>Nirvayak Global Inquiry</h1>
      <p>Submitted from Nirvayak Global website contact form</p>
    </div>
    <div class='content'>
      <div class='item'>
        <div class='label'>Client Name</div>
        <div class='val'>" . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</div>
      </div>
      <div class='item'>
        <div class='label'>Phone Number</div>
        <div class='val'>" . htmlspecialchars($phone ?: 'Not provided', ENT_QUOTES, 'UTF-8') . "</div>
      </div>
      " . (!empty($email) ? "
      <div class='item'>
        <div class='label'>Email Address</div>
        <div class='val'><a href='mailto:" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "'>" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</a></div>
      </div>" : "") . "
      <div class='item'>
        <div class='label'>Service / Area of Interest</div>
        <div class='val'>" . htmlspecialchars($projectType, ENT_QUOTES, 'UTF-8') . "</div>
      </div>
      <div class='item'>
        <div class='label'>Project Requirements / Message</div>
        <div class='message-box'>" . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . "</div>
      </div>
    </div>
    <div class='footer'>
      Received on " . date('Y-m-d H:i:s T') . " | IP: " . htmlspecialchars($_SERVER['REMOTE_ADDR'] ?? 'Unknown', ENT_QUOTES, 'UTF-8') . "
    </div>
  </div>
</body>
</html>
";

// Email Plain Text fallback
$textBody = "Nirvayak Global Inquiry\n"
          . "========================\n\n"
          . "Name: {$name}\n"
          . "Phone: " . ($phone ?: 'Not provided') . "\n"
          . ($email ? "Email: {$email}\n" : "")
          . "Service: {$projectType}\n\n"
          . "Message:\n{$message}\n\n"
          . "Submitted on: " . date('Y-m-d H:i:s T') . "\n"
          . "IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown');

// Boundary for multipart MIME
$boundary = md5(time());

// Headers
$headers   = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'From: Nirvayak Global Website <info@nirvayakglobal.com>';
$headers[] = 'Reply-To: ' . ($replyToEmail !== 'info@nirvayakglobal.com' ? "{$name} <{$replyToEmail}>" : 'info@nirvayakglobal.com');
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'Content-Type: multipart/alternative; boundary="' . $boundary . '"';

// Compose body
$fullBody = "--{$boundary}\r\n"
          . "Content-Type: text/plain; charset=UTF-8\r\n"
          . "Content-Transfer-Encoding: 7bit\r\n\r\n"
          . $textBody . "\r\n\r\n"
          . "--{$boundary}\r\n"
          . "Content-Type: text/html; charset=UTF-8\r\n"
          . "Content-Transfer-Encoding: 7bit\r\n\r\n"
          . $htmlBody . "\r\n\r\n"
          . "--{$boundary}--";

// Send email using PHP mail() (Hostinger default sendmail)
$sent = @mail($to, $subject, $fullBody, implode("\r\n", $headers), "-f info@nirvayakglobal.com");

if ($sent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully to info@nirvayakglobal.com.'
    ]);
} else {
    // If standard mail fails, fallback without the fifth parameter
    $retry = @mail($to, $subject, $fullBody, implode("\r\n", $headers));
    if ($retry) {
        http_response_code(200);
        echo json_encode([
            'success' => true,
            'message' => 'Thank you! Your message has been sent successfully to info@nirvayakglobal.com.'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Server was unable to deliver email at this time. Please contact us directly at info@nirvayakglobal.com'
        ]);
    }
}
