pipeline {
    agent any
    stages {
        stage('Install Dependency') {
            steps {
                bat 'npm install'
            }
        }
        stage('Build') {
            steps {
                bat 'npm build'
            }
        }
    }
    post {
        always {
            junit 'build/**/*.*'
        }
    }
}