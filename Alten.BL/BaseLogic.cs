using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Alten.Data;

namespace Alten.BL
{
    public class BaseLogic
    {
        public AltenDB context;
        public BaseLogic()
        {
            context = new AltenDB();
        }
    }
}
