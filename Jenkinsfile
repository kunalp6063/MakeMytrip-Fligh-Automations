pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/kunalp6063/MakeMytrip-Fligh-Automations'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install' // Windows system के लिए
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test' // Windows में
            }
        }
    }
}
