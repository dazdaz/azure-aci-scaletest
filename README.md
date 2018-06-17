# azure-aci-scaletest
This is the tool that can be used to do scale test containers on Azure Container Instance (ACI). This tool was developed to spinup any number of containers on ACI and collect the metrics of boot time of each of the container instances and give the results. The results can be used analyse how fast the CI intances are  being spinned up.
Prerequisites for the tool to be used:
 1. Azure subscription
 2. Resource group pre created in which the ACIs will be spinned up.
 3. Azure Container Registry (ACR) already created within the subscription.
 4. A service Principal with contributor access.
 5. A Ubuntu server on which the controller service can be run.
 
 With the above pre-requisites get the following details:
 1. Azure subscription Id
 2. Service principal ID
 3. Service Principal Password
 4. Tenant Id
 5. ACR Server name
 6. ACR username
 7. ACR Password
 8. Azure region Name in which the resoyrce group is created
 
 Steps to test use this tool:
 
 Step 1: Prepare a Server for running the tool
  a. Spin up a Ubuntu 16.X Ubuntu VM on Azure.
  b. Login into the server and install node.js and git tools.
  c. create a folder where you would want to deploy the tool.
  d. cd to the tool and clone the git repo < git clone https://github.com/gkranga/azure-aci-scaletest.git >
  e. cd azure-aci-scaletest
  f. cd server-app
  g. npm install
  h. Install Docker
  
 
 Step 2: Prepare the Container image which will be spinned up on ACI
  a. from the root folder run the command cd client-app
  b. edit the client.js file using any editor and change the value of the "hostname" key to the IP address of the public IP address of the server created in the step 1 and save the file.
  c. run the command "sudo docker build <<ACR username>>
 
 
 Step 3: Run the server which control the spin up process and report.
  a. 
  b. 
  
