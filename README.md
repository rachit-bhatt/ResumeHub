# ResumeHub

## Project Description

ResumeHub is an open-source web application designed to help users create, manage, and share their resumes easily. The project utilizes Node.js for the backend, Express.js for the server framework, and MongoDB Atlas for the database. The front end is built with React, providing a dynamic and responsive user interface.

## Features

- Create and edit resumes with a user-friendly interface.
- Save and manage multiple resume versions.
- Export resumes to PDF.
- Share resume links for easy access.
- Secure user authentication and authorization.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: React
- **Database**: MongoDB Atlas
- **Deployment**: GitHub Pages (Frontend), Heroku (Backend)
- **DevOps**: Docker (optional), CI/CD with GitHub Actions

## Setup Instructions

Follow these steps to set up your development environment for ResumeHub on Windows, macOS, or Linux.

### Prerequisites

#### Windows

1. Open PowerShell as Administrator.
2. Copy and paste the following script into a file named `setup.ps1`:

    ```powershell
    # Check for admin rights
    if (-not ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
        Write-Warning "You do not have Administrator rights to run this script!`nPlease re-run this script as an Administrator!"
        exit
    }

    # Install Chocolatey
    Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

    # Install Node.js and npm
    choco install nodejs -y

    # Install Git
    choco install git -y

    # Install Visual Studio Code
    choco install vscode -y

    # Install Heroku CLI
    choco install heroku-cli -y

    # Optional: Install Docker Desktop
    choco install docker-desktop -y

    Write-Output "Installation complete. Please restart your terminal or computer if necessary."
    ```

3. Navigate to the directory where `setup.ps1` is saved.
4. Run the script:

    ```powershell
    .\setup.ps1
    ```

#### macOS

1. Open Terminal.
2. Copy and paste the following script into a file named `setup.sh`:

    ```bash
    #!/bin/bash

    # Check for Homebrew and install if not present
    if ! command -v brew &> /dev/null; then
        echo "Homebrew not found. Installing Homebrew..."
        /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    else
        echo "Homebrew already installed"
    fi

    # Update Homebrew
    brew update

    # Install Node.js and npm
    brew install node

    # Install Git
    brew install git

    # Install Visual Studio Code
    brew install --cask visual-studio-code

    # Install Heroku CLI
    brew tap heroku/brew && brew install heroku

    # Optional: Install Docker Desktop
    brew install --cask docker

    echo "Installation complete. Please restart your terminal if necessary."
    ```

3. Navigate to the directory where `setup.sh` is saved.
4. Make the script executable:

    ```bash
    chmod +x setup.sh
    ```

5. Run the script:

    ```bash
    ./setup.sh
    ```

#### Linux (Ubuntu)

1. Open Terminal.
2. Copy and paste the following script into a file named `setup.sh`:

    ```bash
    #!/bin/bash

    # Update package lists
    sudo apt update

    # Install Node.js and npm
    sudo apt install -y nodejs npm

    # Install Git
    sudo apt install -y git

    # Install Visual Studio Code
    sudo snap install --classic code

    # Install Heroku CLI
    curl https://cli-assets.heroku.com/install.sh | sh

    # Optional: Install Docker
    sudo apt install -y apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt update
    sudo apt install -y docker-ce

    echo "Installation complete. Please restart your terminal if necessary."
    ```

3. Navigate to the directory where `setup.sh` is saved.
4. Make the script executable:

    ```bash
    chmod +x setup.sh
    ```

5. Run the script:

    ```bash
    ./setup.sh
    ```

### Merits and Demerits of Each Platform

#### Windows
- **Merits**: Widely used, user-friendly, good compatibility.
- **Demerits**: Resource-intensive, some tools harder to install.

#### macOS
- **Merits**: Unix-based, strong development support, good integration with Apple products.
- **Demerits**: Expensive hardware, some software not available.

#### Linux (Ubuntu)
- **Merits**: Free, open-source, customizable, strong development support.
- **Demerits**: Steeper learning curve, some software may not be available.

## Contribution Guidelines

We welcome contributions to ResumeHub! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

Please ensure your code follows our coding standards and is well-documented. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
