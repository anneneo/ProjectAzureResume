using Newtonsoft.Json;

namespace Company.Function {

    public class countercontainer {
        [JsonProperty(PropertyName="id")]

        public string Id {get; set;}

        [JsonProperty(PropertyName="count")]

        public int Count {get; set;}
    }
    
}