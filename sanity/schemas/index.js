import pageInfo from './pageInfo';
import experience from './experience';
import project from './project';
import skill from './skill';
import social from './social';
import { createSchema } from 'sanity';

export const schemaTypes = [
    skill,
    pageInfo,
    experience,
    social,
    project,
]
