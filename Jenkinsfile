pipeline {
    agent any

    tools {
        nodejs "node16"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/kunalp6063/MakeMytrip-Fligh-Automations'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
