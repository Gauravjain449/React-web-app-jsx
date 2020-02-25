pipeline {
//    agent {
//         docker { image 'node:alpine' }
//     }
    agent any
    environment {
       
        REPOSITORY_PROD_TAG="gauravjain449/client-app-jsx-test:${BUILD_NUMBER}"
        CONTAINER_NAME="client-app-jsx-test-${BUILD_NUMBER}"
      
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
        stage('Docker build Prod image') {
            steps {
                sh 'docker build -t ${REPOSITORY_PROD_TAG} .'
            }
        }
        stage('Docker Run image') {
            steps {
                sh 'docker run --name=${CONTAINER_NAME} -d  ${REPOSITORY_PROD_TAG} npm start'
            }
        }
        stage('COPY Build') {
            steps {
                sh 'pwd'
                sh 'docker cp ${CONTAINER_NAME}:/app/build .'
            }
        }
        // stage('Install Dependencies'){
        //     steps {
        //         sh 'npm install'
        //     }
        // }
        // stage('Build'){
        //     steps {
        //         sh 'npm run build'
        //     }
        // }
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
            //archiveArtifacts artifacts: 'build/**/*', fingerprint: true
            //deleteDir()
            echo 'This will always run'
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


