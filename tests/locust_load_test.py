import time
from locust import HttpUser, task

class QuickstartUser(HttpUser):
    @task
    def hello_world(self):
        self.client.get("/")
        self.client.get("/projects")
        self.client.get("/contact")
        self.client.get("/blog")
        self.client.get("/about")


