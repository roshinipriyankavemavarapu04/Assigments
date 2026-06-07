from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from uvicorn import middleware


app =FastAPI()
app.add_middleware(CORSMiddleware,
                   allow_origins = ["*"],
                 allow_credentials = True,
                 allow_methods =["*"],
                 allow_headers = ["*"])
class User(BaseModel):
    name:str
    age:int
User_db= []
@app.post("/user")
def create_user(u: User):
    User_db.append(u)
    return {"message": "user created ","data":u}





