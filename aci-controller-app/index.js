'use strict';


const msrest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const AzureServiceClient = msRestAzure.AzureServiceClient;
const ComputeManagementClient = require('azure-arm-compute');
const NetworkManagementClient = require('azure-arm-network');

 
const clientId = process.env['CLIENT_ID'];
const secret = encodeURIComponent(process.env['APPLICATION_SECRET']);
const domain = process.env['DOMAIN']; //also known as tenantId
const subscriptionId = process.env['AZURE_SUBSCRIPTION_ID'];
var client;

const t = new Date
const postData = JSON.stringify ({ControllerUtcTimestamp: t.getUTCHours() + ":" + t.getUTCMinutes() + ":" + t.getUTCSeconds()})
console.log(postData);

//an example to list resource groups in a subscription
msRestAzure.loginWithServicePrincipalSecret(clientId, secret, domain).then((creds) => {
  client = new AzureServiceClient(creds);
  let options = {
    method: 'PUT',
    url: `https://management.azure.com/subscriptions/${subscriptionId}/resourceGroups/rategaindemo/providers/Microsoft.ContainerInstance/containerGroups/demo1?api-version=2018-04-01`,
    headers: {
      'user-agent': 'MyTestApp/1.0'
    },
    body: 
    	{
		  "id": "/subscriptions/7ca97a71-5d21-4096-a9d4-572fcc338a95/resourceGroups/rategaindemo/providers/Microsoft.ContainerInstance/containerGroups/demo1",
		  "location": "southeastasia",
		  "name": "demo1",
		  "properties": {
		    "containers": [
		      {
		        "name": "demo1",
		        "properties": {
		          "command": [],
		          "environmentVariables": [],
		          "image": "rangaacr.azurecr.io/restcontainer",
		          "ports": [
		            {
		              "port": 80
		            }
		          ],
		          "resources": {
		            "requests": {
		              "cpu": 1,
		              "memoryInGB": 1
		            }
		          }
		                  }
		      },
		      {
		        "name": "demo2",
		        "properties": {
		          "command": [],
		          "environmentVariables": [],
		          "image": "rangaacr.azurecr.io/sumnode:v1",
		          "ports": [
		            {
		              "port": 81
		            }
		          ],
		          "resources": {
		            "requests": {
		              "cpu": 1,
		              "memoryInGB": 1
		            }
		          }
		                  }
		      }

		    ],
		    "imageRegistryCredentials": [
		    								{
		    									"password": "=K2ixC/Sqgeu2MbTPFVkETqf9VIdySKx",
		    									"username": "rangaacr",
		    									"server": "rangaacr.azurecr.io"
		    								}		    									
		    							],
		    "ipAddress": {
		            "ports": [
    			    {
    			      "protocol": "TCP",
    			      "port": 80
    			    },
    			        			    {
    			      "protocol": "TCP",
    			      "port": 81
    			    },

    			  ],
		      "type": "Public",
		      "dnsNameLabel": "dnsnamelabel1"
		    },
		    "osType": "Linux",
		    "volumes": [
		    ]
		  },
		  "type": "Microsoft.ContainerInstance/containerGroups"
		}
  }
  return client.sendRequest(options);
}).then((result) => {
  console.dir(result, {depth: null, colors: true});
}).catch((err) => {
  console.dir(err, {depth: null, colors: true});
});

//server.listen(process.env.PORT || 8000);
