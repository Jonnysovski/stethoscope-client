import { Host } from '../classes/host';
import { Group } from '../classes/group';


export class Alert {
    public triggerid: number;
    public description: string;
    public priority: number;
    public lastchange: number;
    // public comments: string;
    // public group: Group;
    public host: Host;
    public userName: string;
    public lastConnectionDate: string;
    public type: string;
    public ip: string;




    // public type: string;
    // public computerName: string;
    // public userName: string;
    // public ipAddress: string;
    // public macAddress: string;
    // public lastConnectionDate: Date;
    // public lastUpdate: Date;
    // public lastModifier: string;
    
}