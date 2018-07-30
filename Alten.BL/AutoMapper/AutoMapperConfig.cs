using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;

namespace Alten.BL
{
    public class AutoMapperConfig
    {
        public static void Configure() {
            Mapper.Initialize(con => {
                con.AddProfile<AutoMapperProfile>();
            });
        }
    }
}
