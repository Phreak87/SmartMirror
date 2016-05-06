#!! /bin/bash

cd /home/pi
mkdir Electron
cd Electron
unzip /home/pi/SmartMirror/Setup/electron-v0.37.8-linux-arm.zip

xset s off
xset -dpms
xset s noblank

echo " #!/bin/bash"             > /home/pi/Desktop/Start.sh
echo "sleep 2"                 >> /home/pi/Desktop/Start.sh
echo "cd /home/pi/SmartMirror" >> /home/pi/Desktop/Start.sh
echo "sudo git pull"           >> /home/pi/Desktop/Start.sh
echo "cd /home/pi/Electron"    >> /home/pi/Desktop/Start.sh
echo "./electron /home/pi/SmartMirror/Mirror" >> /home/pi/Desktop/Start.sh

cd /home/pi/Desktop/
chmod +x /home/pi/Desktop/Start.sh 
echo "@/home/pi/Desktop/Start.sh" >> /home/pi/.config/lxsession/LXDE-pi/autostart
echo "@xset s off" >> /home/pi/.config/lxsession/LXDE-pi/autostart
echo "@xset -dpms" >> /home/pi/.config/lxsession/LXDE-pi/autostart
echo "@xset s noblank" >> /home/pi/.config/lxsession/LXDE-pi/autostart
nano /home/pi/.config/lxsession/LXDE-pi/autostart