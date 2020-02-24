pipeline {
   agent {
        docker { image 'node:alpine' }
    }

    
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
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
            }
        }
        stage('Build'){
            steps {
                sh 'npm run build'
            }
        }
        // stage('Install Dependencies') {
        //      steps {
                   
               
        //             timeout(time: 30, unit: 'SECONDS') {  // HOURS , MINUTES
        //                 retry(3) {
        //                     sh 'npm --version'
        //                 }
        //             }

                   
        //     }
        // }
        
    }
    post {
        always {
            echo 'This will always run'
            junit 'build/**/*.*'
        }
        success {
            echo 'This will run only if successful'
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}


