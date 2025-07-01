pipeline {
    agent any

    tools {
        nodejs 'node16' // ✔️ ये same होना चाहिए जैसा तुमने Jenkins में configure किया है
    }

    stages {
        stage('Check Node & NPM') {
            steps {
                bat 'node -v'
                bat 'npm -v'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}
