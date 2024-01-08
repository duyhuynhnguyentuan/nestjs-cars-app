import { getDb } from '../migrations-utils/db';

export const up = async () => {
  const db = await getDb();
  try {
    // Create a new database (Replace 'my_new_db' with your desired database name)
    await db.admin().command({ createDatabase: 'nest' });
    console.log('Database created successfully!');
  } catch (error) {
    console.error('Error creating database:', error);
  }
};

export const down = async () => {
    const db = await getDb();
    try {
      // Drop the database (Replace 'my_new_db' with the database name to drop)
      await db.dropDatabase();
      console.log('Database dropped successfully!');
    } catch (error) {
      console.error('Error dropping database:', error);
    }
  };
  