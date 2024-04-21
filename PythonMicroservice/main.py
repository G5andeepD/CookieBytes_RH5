from fastapi import FastAPI
from typing import List,Tuple
import sklearn
import sklearn.cluster
from pydantic import BaseModel
import numpy as np
import pandas as pd
import datetime as dt

#allow all cors
from fastapi.middleware.cors import CORSMiddleware  # <--- import
#now set cors to allow all origins
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # <--- here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class Data(BaseModel):
    n_cluster: int
    data: List[Tuple[float,float]]

class Cluster(BaseModel):
    n_centers : List[Tuple[float,float]]

class MedicalRecordQueryDisease(BaseModel):
    disease: str
    time_frame : str



@app.get("/")
async def root():
    return {"message": "Hello World","value":0}

@app.post("/k_means_cluster")
async def k_means_cluster(data: Data)->Cluster:
    kmeans = sklearn.cluster.KMeans(n_clusters=data.n_cluster).fit(np.array(data.data))
    return Cluster(n_centers=[(a,b) for (a,b) in  kmeans.cluster_centers_])

@app.post("/medical_record")
async def get_medical_record(query: MedicalRecordQueryDisease)->List[Tuple[float,float]]:
    with open("medical_record.csv") as f:
        df = pd.read_csv(f)
        #get the current date
        today = dt.datetime.now().date()
        #gett all the entires that match the disease and has a timestamp within the time frame
        if(query.time_frame == 'Today'):
            df = df[(df["diagnosis"]==query.disease) & (df["timestamp"]>str(today-dt.timedelta(days=1)))]
        elif(query.time_frame == 'This Week'):
            df = df[(df["diagnosis"]==query.disease) & (df["timestamp"]>str(today-dt.timedelta(weeks=1)))]
        else:
            df = df[(df["diagnosis"]==query.disease) & (df["timestamp"]>str(today-dt.timedelta(days=30)))]
        return [(a,b) for (a,b) in zip(df['location_lat'],df['location_lon'])]


