const drivelist = require('drivelist');

showDrive = async () => { 
    const drives = await drivelist.list();
    console.log(drives);
}

showDrive();
