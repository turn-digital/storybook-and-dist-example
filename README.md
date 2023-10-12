# Setting up Carbon for IBM Dotcom Project
Follow these steps to set up the Carbon for IBM Dotcom project on your local machine.
1. **Fork the Project**
   - Navigate to the main repository here is the link: https://github.com/carbon-design-system/carbon-for-ibm-dotcom
     and click the Fork button on the top-right corner.
2. **Clone Your Fork**
   - Copy the SSH URL of your forked repository.
   - Open your terminal and run the following command:
     ```
     git clone git@github.com:{YOUR_USERNAME}/carbon-for-ibm-dotcom.git
     ```
   - Change your working directory to the project folder:
     ```
     cd carbon-for-ibm-dotcom
     ```
   (Refer to GitHub documentation for more details on forking a repository.)
3. **Set Up Remote Repository**
   - After cloning, your default remote will be 'origin,' pointing to your personal forked repository.
   - Add a remote named 'upstream' pointing to the main 'carbon-for-ibm-dotcom' repository:
     ```
     git remote add upstream git@github.com:carbon-design-system/carbon-for-ibm-dotcom.git
     ```
   - Verify the remote configuration:
     ```
     git remote -v
     ```
4. **Node Version Setup**
   - Switch to the required Node.js version. Check the supported Node.js versions in the 'package.json' file under the "engines" key.
5. **Building the 'dist' Folder**
   - To build the 'dist' folder with all components that you can host on your server, follow these commands on the main branch:
     You can use Windows to build it.
     ```
     yarn install
     yarn build
     ```
6. **Building Storybook**
   - To build Storybook, navigate to the 'cwc-v2-release/v2.0.1' branch and run the following commands:
     You will need ubuntu 20.04 or later to build it.
     ```
     yarn install --immutable --immutable-cache
     yarn lerna run --scope @carbon/web-components build
     cd packages/carbon-web-components
     yarn build-storybook
     ```
7. **Storybook and Components**
   - Navigate to the 'packages/carbon-web-components' directory, where you'll find the 'storybook-static' and 'dist' folders.
   - Running Storybook static on your server will provide you with Storybook containing all web components.
8. **Ready to Use**
   - Now you have both folders needed to run Storybook on your server and import web components from your own server.
     
9. **Adding Custom Components to Storybook**
   - To include custom components in Storybook, follow these steps:
     - Navigate to the 'cwc-v2-release/v2.0.1' branch.
     - Locate the path for custom components: `carbon-for-ibm-dotcom/packages/carbon-web-components/src/components`.
       Example custom component folders are available in this repository for reference.
     - After adding your custom component, run the following commands in the directory `carbon-for-ibm-dotcom/packages/carbon-web-components`:
       ```
       yarn build-storybook
       ```
     - This will generate a new 'storybook-static' folder that you can host on your server.
     - To run Storybook from your IDE and test your component without building it, use the following command in the same directory:
       ```
       yarn storybook
       ```

10. **Creating a New 'dist' Folder with Custom Component**
    - If you need to create a new 'dist' folder that includes your custom component, go to the main branch.
    - You'll need to modify the `carbon-for-ibm-dotcom/packages/carbon-web-components/src/globals/settings.ts` file.
    - Add a new line in the settings file, like this:
      ```
      ${prefix}-custom-component,
      ```
    - After adding the line, run the following command in the source directory:
      ```
      yarn build
      ```
