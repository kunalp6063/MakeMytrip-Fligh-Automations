pipeline {
    agent any

    tools {
        nodejs 'node16' // Jenkins → Manage Jenkins → Global Tool Configuration → NodeJS tool name
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}
