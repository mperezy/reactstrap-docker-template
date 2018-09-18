# Reactstrap + Docker Template Project

Only for development:

* To run this:
    ```bash
      docker-compose up --build
    ```
* The project automatically will start and for begin navigate follow these endpoints:
    * For natives docker users like **Windows Pro/Ent, Linux, Mac latest versions**: 
        ```bash
        http://localhost:3000
        ```
    * For Windows/Mac older versions using **Docker Toolbox** (VirtualBox): 
        ```bash 
        http://{DOCKER-MACHINE-IP}:3000
        ```
* For stop the container use: 
    ```bash 
    docker-compose down
    ```
    
* For re-run the container use:
    ```bash
    docker-compose up
    ```
* Enjoy developing!!
