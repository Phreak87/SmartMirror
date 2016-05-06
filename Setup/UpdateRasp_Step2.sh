#!! /bin/bash

cd /home/pi/Desktop/
git clone https://github.com/Phreak87/SmartMirror.git  						#Auf Desktop unter SmartMirror
mkdir Electron																# Hier entpacken wir
cd Electron																	# und wechseln hinein
unzip /home/pi/Desktop/SmartMirror/Setup/electron-v0.37.8-linux-arm.zip		# In Ordner Electron entpacken
cp /home/pi/Desktop/SmartMirror/*.* /home/pi/Desktop/Electron/test			# kopiere alle nötigen Dateien

xset s off
xset -dpms
xset s noblank

echo " #!/bin/bash"  > /home/pi/Desktop/Test.sh
echo "sleep 2"     >> /home/pi/Desktop/Test.sh
echo "/home/pi/Desktop/Electron/electron /home/pi/Desktop/Electron/test" >> /home/pi/Desktop/Test.sh

cd /home/pi/Desktop/
chmod +x /home/pi/Desktop/Test.sh 
echo "@/home/pi/Desktop/Test.sh" >> /home/pi/.config/lxsession/LXDE-pi/autostart
echo "@xset s off" >> /home/pi/.config/lxsession/LXDE-pi/autostart
echo "@xset -dpms" >> /home/pi/.config/lxsession/LXDE-pi/autostart
echo "@xset s noblank" >> /home/pi/.config/lxsession/LXDE-pi/autostart
nano /home/pi/.config/lxsession/LXDE-pi/autostart