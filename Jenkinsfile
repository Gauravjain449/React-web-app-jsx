pipeline {
    agent any
    stages {
        stage('Clean WS and GIT Pull') {
            steps {
                cleanWs()
                git credentialsId: 'GitHub', url: "https://github.com/Gauravjain449/React-web-app-jsx.git"
            }

        }
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