pipeline {
   agent { label 'node-10.15.3' }
    options {
        timeout(time: 1, unit: 'HOURS')
    }
    stages {
        stage('Clean WS and GIT Pull') {
            steps {
                cleanWs()
                git credentialsId: 'GitHub', url: "https://github.com/Gauravjain449/React-web-app-jsx.git"
            }
        }
        stage('Install Dependencies') {
             steps {
                sh 'npm install'
            }
        }
    }
}


