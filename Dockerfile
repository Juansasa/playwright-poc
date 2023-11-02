FROM mcr.microsoft.com/playwright:v1.39.0-focal

COPY package.json playwright.config.ts app/
COPY e2e app/e2e
COPY playwright app/playwright

# Setup directory permissions
RUN mkdir "/.npm"
RUN chmod 0777 "/.npm"
RUN chown -R 1001 app

WORKDIR app

# Install dependencies
RUN npm install

# Install browsers
RUN npx playwright install

USER 1001

# Run playwright test
CMD [ "npx", "playwright", "test", "--reporter=list" ]