pipeline {
    agent {
        docker { image 'node:alpine' }
    }
    stages {
        stage('Test') {
            steps {
                bat 'node --version'
            }
        }
    }
}