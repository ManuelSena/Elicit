using System.Web.Http;
using System.Web.Mvc;
using ElicitPodcast.Models.Response;
using ElicitPodcast.Services;
using ElicitPodcast.Services.Podcast;
using Microsoft.Practices.Unity;
using Unity.WebApi;

namespace ElicitPodcast
{
    public sealed class UnityConfig
    {
        private static readonly UnityConfig _instance = new UnityConfig();
        static UnityConfig() { }
        private UnityConfig() { }
        public static UnityConfig Instance { get { return _instance; } }

        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<IPodcastService, PodcastService>();
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
            DependencyResolver.SetResolver(new Unity.Mvc5.UnityDependencyResolver(container));
        }
    }
}