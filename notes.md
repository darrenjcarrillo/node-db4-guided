# Data Modeling Notes

## Requirements

A client has hired you to build an API for managing `zoos` and the `animals` kept at each `zoo`. The API will be use for `zoos` in the _United States of America_, no need to worry about addresses in other countries.

For the `zoos` the client wants to record:

- name.
- address.

For the `animals` the client wants to record:

- name.
- species.
- list of all the zoos where they have resided.

Determine the database tables necessary to track this information.
Label any relationships between table.

## Requirements

A client has hired you to track zoo animals.
For each individual animal, you must track that their _name_, _species_, and _all zoos_ in which they have resided.
(including zoo name and address).
Determine the database tables necessary to track this information.
Label any relationships between table.
For the `zoos` the client wants to record the :

- name
- address
  For the `animals` the client wants to record:
- name
- species
- list of all zoos they have resided
  Determining the DB tables necessary to track this info.
  Label any relationships between table too.

## A good Data Model:

- is easily readable.
- captures ALL information the system needs.
- captures ONLY the information the system needs.
- reflect reality ( from the POV of the system )
- is flexible, can evolce w/ the system.
- guarantess `data integrity`, without sacrificing too much performance.
- is driven by the way we access data.

## Components

- entities (nouns: zoo, animal, species), like a resource ---> tables.
- properties ---> columns or fields.
- relationships ---> Foreign Keys (FK)

## Workflow

- identify entities
- identify the properties
- identify relationships

## Mantras

Collap
