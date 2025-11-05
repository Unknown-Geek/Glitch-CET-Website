import { createClient } from '@sanity/client';

const projectId = "3cgjhe0a";
const dataset = "production";
const apiVersion = '2025-11-05';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true
});

export default client;
