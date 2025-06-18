export default async (request, context) => {
  // Set CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    return new Response("", {
      status: 200,
      headers,
    });
  }

  try {
    // Your redirect HTML
    const redirectHtml =
      "%3cdiv%20id%3d%22initiate3dsSimpleRedirect%22%3e%0a%3ciframe%20id%3d%22cardinal_collection_iframe%22%20name%3d%22collectionIframe%22%20height%3d%2210%22%20width%3d%2210%22%20style%3d%22display%3a%0anone;%22%3e%3c%2fiframe%3e%0a%3cform%20id%3d%22cardinal_collection_form%22%20method%3d%22POST%22%20target%3d%22collectionIframe%22%20action%3dhttps%3a%2f%2fcentinelapistag.cardinalcommerce.com%2fV1%2fCruise%2fCollect%3e%0a%3cinput%20id%3d%22cardinal_collection_form_input%22%20type%3d%22hidden%22%20name%3d%22JWT%22%0avalue%3d%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhZjA1M2NlZi1jNGMwLTQ1ZTAtYTlhZC1iNGRjMmIwY2Y1NTYiLCJpYXQiOjE3NTAyMTk1NTMsImlzcyI6IjVkZDgzYmYwMGU0MjNkMTQ5OGRjYmFjYSIsImV4cCI6MTc1MDIyMzE1MywiT3JnVW5pdElkIjoiNjQyZWI1MDIyYmEyNDcyZDAzZGM1NWU5IiwiUmVmZXJlbmNlSWQiOiI3ZGNjYTU4Mi03YzAxLTRmMTgtYTVlZC1mMzFlYWQxM2EzMjkifQ.B5a4rUVzDzw_KLTLUkObjDeyW7Dv58G-Eb8BNfHqBqA%22%3e%0a%3c%2fform%3e%0a%3cscript%20id%3d%22initiate-authentication-script%22%3e%20%0avar%20e%3ddocument.getElementById(%22cardinal_collection_form%22);%20%0aif%20(e)%20%7b%20e.submit();%20if%20(e.parentNode%20!%3d%3d%20null)%20%7b%20e.parentNode.removeChild(e);%20%7d%20%7d%20%0a%3c%2fscript%3e%0a%3c%2fdiv%3e%0a";

    return new Response(
      JSON.stringify({
        success: true,
        redirectHtml: redirectHtml,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        status: 500,
        headers,
      }
    );
  }
};
