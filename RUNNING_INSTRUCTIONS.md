1. Once the database has been seeded (see SEEDING_INSTRUCTIONS.md to seed the database), in the project folder, navigate to the develop branch by typing:
  git checkout develop

2. Pull any new changes to develop by typing:
  git pull

3. Either:

    Navigate onto you feature branch by typing:
      git checkout feature/feature_branch_name

  Or:

    Create a new feature branch and navigate onto it by typing:
      git checkout -b feature/new_feature_branch_name

4. Pull changes from the develop branch onto your feature branch by typing:
  git merge develop

5. Open the Activity Monitor and quit any instances of mongod which are running

6. Install npm node modules by typing:
  npm install

7. Start up mongodb, and leave it running in the terminal window by typing:
  mongod

8. Open a new terminal tab to npm build and leave it running in the terminal window type:
  npm run build

9. Open a new terminal tab to get the server up and running and leave it running in the terminal window type:
  npm run server:dev

10. Run http://localhost:3000/ in the browser to see the website running =D
