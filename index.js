const drivelist = require('drivelist');

showDrive = async () => { 
    const drives = await drivelist.list()
    

    const usbDrives = drives.filter((drive) => {
        if(drive.isUSB) return true;
        return false;
    });

    console.log(usbDrives);
    
    if(usbDrives.length > 0){
        console.log(`Found ${usbDrives.length} USB drives`);
    }
    

}

showDrive();

