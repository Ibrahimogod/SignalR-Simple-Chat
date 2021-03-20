using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalRApp
{
    [HubName("Chat")]
    public class MyHub : Hub
    {
        [HubMethodName("Send")]
        public void Send(string message)
        {
            Clients.All.Display(DateTime.Now.ToString("HH:mm")+' '+ message);
        }        
    }
}