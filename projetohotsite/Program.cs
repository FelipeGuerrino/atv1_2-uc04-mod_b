using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Hotsite
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .ConfigureLogging(logBuilder =>
                    {
                        logBuilder.ClearProviders(); //remove provedores de log anteriores
                        logBuilder.AddConsole();
                        logBuilder.AddTraceSource("Information, ActivityTracing"); //adiciona provedor de trace listener
                    })
                .UseStartup<Startup>();
    }
}
