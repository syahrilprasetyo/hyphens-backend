// index.ts
import Express, { Application } from 'express';
import { router } from './routers/index_router';
import { setupAllTablesSetup } from './config/db_config';
import Helmet from 'helmet';
import Cors from "cors";


const port = 8000;

const app: Application = Express();

(async () => {
  await setupAllTablesSetup();
})();

app.use(Helmet());
app.use(Cors());

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use('', router);
app.get("/chats", (req, res) => {
  // Simulated chat data
  const chats = [
    {
      id: 1,
      user: "John Doe",
      lastMessage: "Hello there!",
      timestamp: "1 min ago",
    },
    {
      id: 2,
      user: "Alice Smith",
      lastMessage: "Sure, see you then.",
      timestamp: "3 hrs ago",
    },
    {
      id: 3,
      user: "Bob Johnson",
      lastMessage: "Thanks for the update.",
      timestamp: "1 day ago",
    },
  ];

  // Return the chats as JSON
  res.json(chats);
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
