#!! /bin/bash

# Speicherplatz schaffen und unnötige Updates verhindern
sudo apt-get --yes --force-yes remove --purge minecraft-pi 
sudo apt-get --yes --force-yes remove --purge scratch
sudo apt-get --yes --force-yes remove --purge wolfram-engine
sudo apt-get --yes --force-yes remove --purge sonic-pi 
sudo apt-get --yes --force-yes clean
sudo apt-get autoremove 
sudo rm -r /home/pi/python_games/
sudo rm -f /home/pi/Desktop/epiphany-browser.desktop
sudo rm -f /home/pi/Desktop/minecraft-pi.desktop
sudo rm -f /home/pi/Desktop/pistore.desktop
sudo rm -f /home/pi/Desktop/python-games.desktop
sudo rm -f /home/pi/Desktop/scratch.desktop
sudo rm -f /home/pi/Desktop/sonic-pi.desktop
sudo rm -f /home/pi/Desktop/wolfram-language.desktop
sudo rm -f /home/pi/Desktop/wolfram-mathematica.desktop

apt-get update
sudo rpi-update
sudo apt-get upgrade --yes
sudo apt-get dist-upgrade --yes
apt-get install tightvncserver x11-xserver-utils unclutter
sudo apt-get -f install

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