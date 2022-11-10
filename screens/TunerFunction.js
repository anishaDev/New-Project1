import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import PitchFinder from "pitchfinder";
import MicStream from 'react-native-microphone-stream';

 export const TunerFunction = () => {
    middleA = 440;
    semitone = 69;
    noteStrings = [
      "C",
      "C♯",
      "D",
      "D♯",
      "E",
      "F",
      "F♯",
      "G",
      "G♯",
      "A",
      "A♯",
      "B",
    ];
const [sampleRate,setSampleRate] = useState(22050 );
const [bufferSize, setBufferSize] = useState( 2048);
const[pitchFinder] = useState(new PitchFinder.YIN({ sampleRate: setSampleRate }));
 const start = (props) => {
  MicStream.init({
    sampleRate: sampleRate,
    bufferSize: bufferSize,
  });
  MicStream.start();
  MicStream.addListener((data) => {
    const frequency = pitchFinder(data);
    if (frequency && props.onNoteDetected) {
      const note = getNote(frequency);
      props.onNoteDetected({
        name: props.noteStrings[note % 12],
        value: note,
        cents: getCents(frequency, note),
        octave: parseInt(note / 12) - 1,
        frequency: frequency,
      });
    }
  })

}




  /**
   * get musical note from frequency
   *
   * @param {number} frequency
   * @returns {number}
   */

    const getNote = (frequency) => {
    const note = 12 * (Math.log(frequency / this.middleA) / Math.log(2));
    return Math.round(note) + this.semitone;
  }
/**
   * get the musical note's standard frequency
   *
   * @param note
   * @returns {number}
   */

  const getStandardFrequency = (note) => {
  return this.middleA * Math.pow(2, (note - this.semitone) / 12);
}
 /**
   * get cents difference between given frequency and musical note's standard frequency
   *
   * @param {float} frequency
   * @param {int} note
   * @returns {int}
   */

   const getCents = (frequency, note)=> {
    return Math.floor(
      (1200 * Math.log(frequency / this.getStandardFrequency(note))) /
        Math.log(2)
    );
  }
 }


const styles = StyleSheet.create({})