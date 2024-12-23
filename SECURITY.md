# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| 2.0.x   | :x:                |
| 3.0.x   | :x:                |
| 3.1.x   | :x:                |
| > 3.2   | :white_check_mark: |

# Security Policy

## Versions Overview

### Version 1.0.0x
- **Description**: Windows executable file.
- **Security Level**: No security needed as it is a standalone `.exe` file.
- **Technical Notes**: Requires Python 12 or higher to download and run dependencies.

### Version 2.0.0x
- **Description**: Flask application with crypt and hashed passwords.
- **Security Level**: Medium security.
- **Technical Notes**: Tested on Firefox and Chrome but not responsive. Potential overwrite issues observed.

### Version 3.0.0x
- **Description**: Firebase Authentication without backend.
- **Security Level**: Unsecure (API keys are exposed).
- **Technical Notes**: Compatible with web browsers and responsive, but deployment was stopped due to security issues.

### Version 3.1.0x
- **Description**: Supabase Authentication without Row-Level Security (RLS).
- **Security Level**: Secure, but the database allows all-read permissions, making it less restrictive.
- **Technical Notes**: Compatible with web browsers and responsive, but deployment was halted due to RLS issues.

### Version 3.2.0x
- **Description**: NextAuth, Vercel, Google, and GitHub Authentication implemented.
- **Security Level**: Top security; no vulnerabilities were identified.
- **Technical Notes**: Under deployment, tested on Firefox and Chrome. Safari crashes.

## Reporting Security Issues

If you discover any vulnerabilities in this project, please report them by contacting me directly via email or through the GitHub Issues section of this repository. Include details to reproduce and understand the issue, and I will address it promptly.

## Additional Information

- For technical inquiries or permissions, please refer to the [README](README.md) file.
- The project is protected under copyright and redistribution rules, as mentioned in the README.


