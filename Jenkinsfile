pipeline {
    agent any
    stages {
        stage('Install Dependency') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm build'
            }
        }
    }
    post {
        always {
            junit 'build/**/*.*'
        }
    }
}