import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTransportrjApi implements ICredentialType {
        name = 'N8nDevApisetuGovTransportrjApi';

        displayName = 'Apisetu Gov Transportrj API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTransportrj/apisetu-gov-transportrj.svg', dark: 'file:../nodes/ApisetuGovTransportrj/apisetu-gov-transportrj.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/transportrj/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/transportrj/v3',
                        description: 'The base URL of your Apisetu Gov Transportrj API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
