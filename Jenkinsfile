pipeline {
    agent any

    tools {
        nodejs 'node16' // Jenkins → Manage Jenkins → Global Tool Configuration → NodeJS name
    }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }
}
