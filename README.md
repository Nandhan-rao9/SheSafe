Overview

Our project aims to develop an AI-powered Women Safety Analytics System that detects and prevents threats in real time using deep learning models and neural networks. The system is designed to enhance women's safety by identifying anomalies such as kidnapping, abuse, and harassment through video surveillance, audio detection, and predictive analytics.

Features

1. Anomaly Detection in Video Surveillance

We leverage deep learning models like MoViNet, LSTMs, and CNNs to train on video data frames. The model detects anomalies like kidnapping, harassment, abuse. Upon detecting an anomaly, the system will send an immediate alert to police authorities. This feature can be integrated with CCTV surveillance systems to enhance real-time monitoring.

2. Audio-Based Emergency Alert System

This feature allows users to set a personal emergency code word (wake word). The system continuously listens for this code word and, when detected, automatically sends an emergency alert along with the user's live location to preset guardians and authorities.

We use the Porcupine Engine architecture for wake word detection, utilizing Mel-Frequency Cepstral Coefficients (MFCCs) to process and analyze audio waveforms through Fourier Transform for effective wake word recognition.

3. Safe Route Mapping System

To ensure safer travel, our system maps crime rates in different locations. Using the K-Nearest Neighbors (KNN) algorithm, it suggests the safest routes for users by avoiding areas with high crime rates or unsafe travel zones, especially during nighttime.

4. Crowd-Sourced Crime Reporting

Users can report unsafe locations, suspicious activities, or potential threats in real time. This data is aggregated to enhance crime mapping and prediction, making the system more effective in preventing incidents.

User Roles

User (Woman): Can access safety features, report unsafe locations, and receive alerts.

Client (Police & Authorities): Receives real-time alerts for incidents detected by the system.

Admin (Developers & System Operators): Manages the system, enhances model accuracy, and ensures smooth integration.
