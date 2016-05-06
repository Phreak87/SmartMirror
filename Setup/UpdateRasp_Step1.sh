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

sudo apt-get update
sudo rpi-update
sudo apt-get upgrade --yes
sudo apt-get dist-upgrade --yes
sudo apt-get install tightvncserver x11-xserver-utils unclutter
sudo apt-get -f install
sudo init 6