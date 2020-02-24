pipeline {
   agent any

    
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
                    retry(3) {
                        bat 'npm XXX'
                    }
               
                    timeout(time: 20, unit: 'SECONDS') {  // HOURS , MINUTES
                        bat 'npm install'
                    }

                   
            }
        }
    }
}


