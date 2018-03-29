export const typeDefs = `
  type Query {
    movie(id: ID!): Movie!
    popular(page: Int): [Movie!]!
    search(query: String! page: Int): [Movie!]!
    person(id: ID!): Person!
  }

	type Movie {
		id: ID!
		title: String!
		tagline: String
		overview: String
		status: ReleaseStatus!
		release_date: String!
		runtime: Int
		budget: Int!
		revenue: Int!
		poster: String
		backdrop: String
		popularity: Float!
		score: Float!
		votes: Int!
		genres: [Genre!]!
		languages: [Language!]!
		cast(limit: Int): [Cast!]!
		crew(limit: Int): [Crew!]!
		videos(filter: VideoFilter first: Int): [Video!]!
		similar(limit: Int): [Movie!]!
	}

	type Person {
		id: ID!
		name: String!
		biography: String!
		profile_path: String!
    workedOn(limit: Int): [Movie!]!
    appearsIn(limit: Int): [Movie!]!
	}

	enum ReleaseStatus {
		Rumored
		Planned
		Production
		Post
		Released
		Canceled
	}

	type Genre {
		id: ID!
		name: String!
	}

	type Language {
		iso_639_1: String!
		name: String!
	}

	type Cast {
    id: ID!
		cast_id: ID!
		name: String!
		character: String!
		profile_path: String
		order: Int!
	}

	type Crew {
    id: ID!
		credit_id: ID!
		name: String!
		job: [String]!
		department: String!
		profile_path: String
	}

	type Video {
		id: ID!
		key: String!
		name: String!
		site: String!
		"One of value: 360, 480, 720, 1080"
		size: Int!
		type: VideoType!
	}

	enum VideoType {
		Trailer
		Teaser
		Clip
		Featurette
	}

	input VideoFilter {
		site: [String!]
		type: [VideoType!]
	}
`
