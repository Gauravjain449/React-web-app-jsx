pipeline {
    agent {
        docker { image 'node:6-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}