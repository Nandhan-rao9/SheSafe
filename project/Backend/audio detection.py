import pvporcupine
import pyaudio
import wave

# Path to your custom .ppn model file
model_path = '/Users/harshanvarma/Downloads/avengers-assemble_en_mac_v3_0_0/avengers-assemble_en_mac_v3_0_0.ppn'

# Set up the Porcupine keyword detection
porcupine = pvporcupine.create(keywords=[model_path])

# Initialize audio stream
audio_stream = pyaudio.PyAudio().open(
    rate=porcupine.sample_rate,
    channels=1,
    format=pyaudio.paInt16,
    input=True,
    frames_per_buffer=porcupine.frame_length
)

print("Listening for the keyword...")

while True:
    # Read audio input
    pcm = audio_stream.read(porcupine.frame_length)
    # Process it to detect the keyword
    result = porcupine.process(pcm)

    if result >= 0:
        print("Keyword detected! Sending emergency alert...")
        # Trigger your emergency alert here

audio_stream.close()
porcupine.delete()
