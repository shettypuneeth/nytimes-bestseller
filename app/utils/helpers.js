// @flow
import type { People } from '../screens/types/Gallary';

export const getArtistName = (people: Array<People>):string => {
  const relevantPerson = people.length > 0 ? people.filter(p => p.role === 'Artist')[0] : people[0];
  const artist = relevantPerson ? relevantPerson.name : 'Unknown Artist';
  
  return artist;
}