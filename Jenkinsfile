pipeline {
    agent any

    tools {
        nodejs "node16"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/kunalp6063/MakeMytrip-Fligh-Automations'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright install --with-deps'
                sh 'npx playwright test'
            }
        }
    }
}
